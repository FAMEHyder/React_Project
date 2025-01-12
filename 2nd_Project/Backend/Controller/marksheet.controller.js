import Marksheet from "../Models/marksheet.model.js";

const createMarksheet = async (req, res,next) => {
const {mathScience,biology,physics,chemistry,english,mathArts,generalScience,pakStd,urdu}=req.body;

try{
const newMarksheet = new Marksheet({
    mathScience,
    biology,
    physics,
    chemistry,
    english,
    mathArts,
    generalScience,
    pakStd,
    urdu
});

await newMarksheet.save();
res.status(201).json({
    status:true,
    message:"Marksheet created successfully",
    data:newMarksheet
})

}catch(error){
    res.status(500).json({
        status:false,
        message:"error creating the Marksheet",
        err:error
    })
}



}

export default createMarksheet;



export const getMarksheet = async (req, res, next) => {
    const { id } = req.params; // To fetch a single marksheet by ID (if provided)

    try {
        if (id) {
            // Fetch a single marksheet by ID
            const marksheet = await Marksheet.findById(id);
            if (!marksheet) {
                return res.status(404).json({
                    status: false,
                    message: "Marksheet not found",
                });
            }
            return res.status(200).json({
                status: true,
                message: "Marksheet fetched successfully",
                data: marksheet,
            });
        }

        // Fetch all marksheets if no ID is provided
        const marksheets = await Marksheet.find();
        res.status(200).json({
            status: true,
            message: "Marksheets fetched successfully",
            data: marksheets,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error fetching the marksheet(s)",
            err: error,
        });
    }
};
