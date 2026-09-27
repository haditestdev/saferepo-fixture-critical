import SecurityFixture from "@/components/SecurityFixture";

export default function CriticalPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>SafeRepo Fixture: Critical Test Suite</h1>
      <p>
        High-density repository containing 70 to 90 intentional synthetic findings across
        Python SCA, Node.js SCA, multi-runtime SAST, and fake secret tokens.
      </p>
      <SecurityFixture/>
    </main>
  );
}
