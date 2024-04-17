const Product = require("../model/product")
const getAllProducts = async(req,res) => {
    const {name, quantity,featured,sort,select} = req.query;    
    const queryObject = {}
    if(name){
        queryObject.name = {$regex:name, $options:"i"};
    }
    if(quantity){
        queryObject.quantity = quantity;
    }
    if(featured){
        queryObject.featured = featured
    }
    let apiData = Product.find(queryObject)
    if(sort){
        let sortFix = sort.replace("," , " ")
    apiData = apiData.sort(sortFix)
    }
    if(select){
        // let selectFix = select.replace("," , " ")
        let selectFix = select.split("," ).join(" ")
    apiData = apiData.select(selectFix)
    }
    //pagination
let page = Number(req.query.page) || 1;
let limit =Number(req.query.limit) || 6
let skip = (page-1)*limit;
// page=2
// limit=3
// skip= 1*3 = 3
// apiData.skip(3).limit(3);{skip first 3 data}
apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject)

const Products = await apiData   
    res.status(200).json({Products});
}
const getAllProductsTesting = async (req,res) =>{
    const Products = await Product.find(req.query).select("name price")
    res.status(200).json({Products});
}
module.exports=  {getAllProducts,getAllProductsTesting}