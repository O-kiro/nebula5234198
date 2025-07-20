export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log('Visitor data:', req.body); // Cek di logs
      res.status(200).json({ message: "Visitor logged!" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  