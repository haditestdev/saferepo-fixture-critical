"use client";

import React, { useState } from "react";

export default function SecurityFixture() {
  const [markup, setMarkup] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  const triggerRedirect = () => {
    // SAST Trigger 22: Open Redirect
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "1.5rem", borderRadius: "8px" }}>
      <h3>Interactive Test Panel</h3>
      <input
        type="text"
        placeholder="Enter raw HTML..."
        value={markup}
        onChange={(e) => setMarkup(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      {/* SAST Trigger 23: DOM XSS via dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: markup }} />

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Redirect target..."
          value={redirectUrl}
          onChange={(e) => setRedirectUrl(e.target.value)}
          style={{ width: "70%", padding: "0.5rem" }}
        />
        <button onClick={triggerRedirect} style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>
          Redirect
        </button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        {/* SAST Trigger 24: Target blank without rel="noreferrer" */}
        <a href="https://example.com/untrusted" target="_blank">
          Open External Test Link
        </a>
      </div>
    </div>
  );
}
