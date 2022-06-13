const {KeyValue} = require('../database');
const errorHandler = (block) => async(req,res) =>{
    try{
        await block(req,res);
    } catch(e){
        res.status(500).json({ error:e.toString()})
    }
};

const wrapWithErrorHandler = obj =>{
    Object.keys(obj).forEach((key)=>{
        obj[key] = errorHandler(obj[key])
    });
    return obj;
}


async function get(req,res){
    const {key} = req.params;
    if(!key){
        res.status(400).json({ error : 'key is required'});
        return;
    }

    const result = await KeyValue.findOne({
        where : {key},
    });
    console.log(`key-value controller is get function result = ${result}`)
    res.status(200).json({result});
}

async function insertOrUpdate(req,res){
    const {key, value} = req.body;
    if (! key || !value){
        res.status(400).json({ error : 'key and value are requried'});
        return;
    }

    await KeyValue.upsert({ key, value});

    res.status(200).json({ result: 'success'});
}

async function remove(req,res){
    const {key} = req.params;
    if(!key){
        res.status(400).json({ error : 'key is required'});
        return;
    }

    await KeyValue.destroy({
        where : {key},
    });

    res.status(200).json({ result: 'success'});
}
module.exports = wrapWithErrorHandler({
    get,
    insertOrUpdate,
    remove,
});