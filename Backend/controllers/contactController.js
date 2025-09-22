import Contact from "../models/Contact.js";

export const saveContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "✅ Message saved", contact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
