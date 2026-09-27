import unittest
from backend.processor import PY_DUMMY_SECRET

class TestProcessor(unittest.TestCase):
    def test_secret_prefix(self):
        self.assertTrue(PY_DUMMY_SECRET.startswith("sk_live_"))

if __name__ == "__main__":
    unittest.main()
