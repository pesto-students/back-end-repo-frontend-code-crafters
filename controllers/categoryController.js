import "dotenv/config";
import Category from "../models/Category.js";

export const add_category = async (req, res) => {
    let category = new Category({
        name: req.body.name
    })

    await category.save()

    if(!category){
        return res.status(404).send("category cant be created")
    }
    res.send(category)
  };

  export const get_category = async (req, res) => {
    let categoryList = await Category.find()
    // category = await Category.save()

    if(!categoryList){
        return res.status(500).json({success: false})
    }
    res.send(categoryList)
  };