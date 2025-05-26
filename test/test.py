import unittest
import requests
from datetime import datetime

BASE_URL = "http://localhost:3000"

class TestCostManagerAPI(unittest.TestCase):
    """Automated tests for the Cost Manager RESTful API."""

    def test_about_endpoint(self):
        """Test GET /api/about: should return a list of team members with first_name and last_name."""
        res = requests.get(f"{BASE_URL}/api/about")
        self.assertEqual(res.status_code, 200)
        self.assertIsInstance(res.json(), list)
        self.assertTrue(all("first_name" in member and "last_name" in member for member in res.json()))

    def test_add_cost_valid_data(self):
        """Test POST /api/add with valid data: should return the created cost item with matching fields."""
        data = {
            "userid": 242424,
            "description": "testing unittest valid",
            "category": "sport",
            "sum": 19,
            "date": str(datetime.now())
        }
        res = requests.post(f"{BASE_URL}/api/add", json=data)
        self.assertEqual(res.status_code, 201)
        response = res.json()
        for key in ["userid", "description", "category", "sum"]:
            self.assertIn(key, response)
            self.assertEqual(response[key], data[key])
        self.assertIn("date",response)

    def test_add_cost_invalid_missing_sum(self):
        """Test POST /api/add with missing 'sum': should return error 400 with an error message."""
        data = {
            "userid": 123123,
            "description": "testing missing sum",
            "category": "sport"
        }
        res = requests.post(f"{BASE_URL}/api/add", json=data)
        self.assertEqual(res.status_code, 400)
        self.assertIn("error", res.json())

    def test_report_endpoint_valid(self):
        """Test GET /api/report with valid user and date: should return grouped costs by category."""
        res = requests.get(f"{BASE_URL}/api/report?id=123123&year=2025&month=5")
        self.assertEqual(res.status_code, 200)
        self.assertIn("userid", res.json())

    def test_user_found(self):
        """Test GET /api/users/:id for an existing user: should return user info and total."""
        res = requests.get(f"{BASE_URL}/api/users/322642737")
        self.assertEqual(res.status_code, 200)
        self.assertIn("first_name", res.json())
        self.assertIn("last_name", res.json())
        self.assertIn("total", res.json())

    def test_user_not_found(self):
        """Test GET /api/user/:id for non-existing user: should return 404 with error message."""
        res = requests.get(f"{BASE_URL}/api/users/999999")
        self.assertEqual(res.status_code, 404)
        self.assertIn("error", res.json())

if __name__ == '__main__':
    unittest.main()