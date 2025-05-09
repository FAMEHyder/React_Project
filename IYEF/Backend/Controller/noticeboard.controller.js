import Notice from '../Models/noticeboard.model.js';

export const addNotice = async (req, res) => {
    const { title, description, date } = req.body;
  
    if (!title || !description || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const AddNotice = new Notice({ title, description, date });
      await AddNotice.save();
      res.status(201).json({
        status:true,
        message: "added to notice board successfully",

      });
    } catch (error) {
      res.status(500).json({ 
        message: 'Error adding notice', 
        err:error 
    });
    }
  };

export const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ date: -1 }); 
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notices', error });
  }
};


export const deleteAllNotices = async (req, res) => {
  try {
    await Notice.deleteMany();
    res.status(200).json({ message: 'All notices have been deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting notices', error });
  }
};
