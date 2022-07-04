const { Organization } = require('../models');
const httpStatus = require('../helpers/httpStatus');

class OrganizationController {
  static async update(req, res){
   const { id, name, image, phone, address } = req.body;
   const organization = await Organization.findOne({ where: { id } });

    if(!organization){
     return res.status(httpStatus.NOT_FOUND).json({
      msg: 'Organization not found'
     });
    }

    if(!name && !image && !phone && !address){
     return res.status(httpStatus.BAD_REQUEST).json({
        msg: 'Not have fields to update'
     });
    }

    const bodyUpdate = {
        name,
        image,
        phone,
        address
    }

    try {
        await Organization.update(bodyUpdate, {where: {id}});
        return res.status(httpStatus.OK).json({ message: 'Organization updated' });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({msg: error.message})
    }
  }
}

module.exports = OrganizationController;