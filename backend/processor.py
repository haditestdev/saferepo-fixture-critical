"""
Python Data Processing & Deserialization Engine
"""
import pickle
import yaml
import xml.etree.ElementTree as ET
import tempfile

# Synthetic Fake Secret
PY_DUMMY_SECRET = "TEST_STRIPE_API_KEY_PLACEHOLDER"

# SAST PY-10: Insecure Deserialization via pickle
def unpack_session_pickle(raw_data: bytes):
    return pickle.loads(raw_data)

# SAST PY-11: Arbitrary Code Execution via unsafe PyYAML Loader
def unpack_config_yaml(yaml_payload: str):
    return yaml.load(yaml_payload, Loader=yaml.Loader)

# SAST PY-12: XML External Entity (XXE) Parsing
def read_xml_document(xml_string: str):
    root = ET.fromstring(xml_string)
    return root.attrib

# SAST PY-13: Insecure eval() dynamic execution
def calculate_expression(math_str: str):
    return eval(math_str)

# SAST PY-14: Insecure exec() dynamic execution
def run_dynamic_script(script_str: str):
    scope = {}
    exec(script_str, {}, scope)
    return scope

# SAST PY-15: Deprecated tempfile.mktemp
def allocate_temp_buffer():
    return tempfile.mktemp()

# SAST PY-16: Path Traversal in File Read
def get_service_log(filename: str):
    with open("/var/logs/processor/" + filename, "r") as f:
        return f.read()
