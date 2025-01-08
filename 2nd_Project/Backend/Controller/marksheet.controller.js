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