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

    static async register(req,res){
        const {name, facebookUrl, instagramUrl, linkedinUrl, image, description} = req.body;
        let member;
        try {
         member = await Member.create({
          name,
          facebookUrl,
          instagramUrl,
          linkedinUrl,
          image,
          description
         });
        } catch (error) {
         return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          msg: error.message
         });
        }
        return res.status(httpStatus.OK).json(member);
       }

    static async updateMemberById(req,res){

        let member;
        const { id } = req.params;

        try{
            member = await Member.findByPk(id);
        } catch(err) {
            return res.status(httpStatus.NOT_FOUND).json({ message: err.message });
        }

        try{
            member.set(req.body);

            await member.save();

            return res.status(httpStatus.OK).json(member);
        } catch(err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
        }
    
    }
}

module.exports = memberController;