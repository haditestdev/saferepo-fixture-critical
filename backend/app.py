"""
Python Backend Service: High & Critical SAST Testing
"""
from flask import Flask, request, jsonify
import sqlite3
import subprocess
import requests

app = Flask(__name__)

# SAST PY-01: Permissive CORS Wildcard
@app.after_request
def apply_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

# SAST PY-02: SQL Injection in Search (SELECT)
@app.route("/api/query/users", methods=["GET"])
def find_user():
    search = request.args.get("name", "")
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM members WHERE name = '{search}'")
    return jsonify(cursor.fetchall())

# SAST PY-03: SQL Injection in Update
@app.route("/api/query/update", methods=["POST"])
def update_profile():
    data = request.get_json() or {}
    uid = data.get("id", "0")
    status = data.get("status", "active")
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    cursor.execute("UPDATE members SET status = '" + status + "' WHERE id = " + uid)
    return jsonify({"updated": True})

# SAST PY-04: SQL Injection in Delete
@app.route("/api/query/remove", methods=["POST"])
def delete_entry():
    eid = request.args.get("id", "0")
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM members WHERE id = " + eid)
    return jsonify({"removed": True})

# SAST PY-05: Command Injection (subprocess.Popen)
@app.route("/api/ops/check", methods=["GET"])
def test_host():
    address = request.args.get("ip", "127.0.0.1")
    p = subprocess.Popen(f"echo Checking target: {address}", shell=True, stdout=subprocess.PIPE)
    out, _ = p.communicate()
    return jsonify({"result": out.decode("utf-8")})

# SAST PY-06: Command Injection (subprocess.check_output)
@app.route("/api/ops/status", methods=["GET"])
def status_host():
    metric = request.args.get("metric", "all")
    output = subprocess.check_output(f"echo Metric: {metric}", shell=True)
    return jsonify({"status": output.decode("utf-8")})

# SAST PY-07: SSRF via requests.get
@app.route("/api/proxy/request", methods=["GET"])
def fetch_proxy():
    target = request.args.get("target", "http://localhost")
    resp = requests.get(target, timeout=3)
    return jsonify({"response": resp.text})

if __name__ == "__main__":
    # SAST PY-08: Production Debug Mode Enabled
    # SAST PY-09: Binding to 0.0.0.0
    app.run(host="0.0.0.0", port=8000, debug=True)
