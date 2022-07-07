const { Member } = require('../models/index');
const httpStatus = require('../helpers/httpStatus');

class memberController {

    static async getAll(req,res){
        try {
            const members = await Member.findAll(); 
            return res.status(httpStatus.OK).json(members);
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}

module.exports = memberController;