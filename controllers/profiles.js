/**
 * Created by alejandrolemusrodriguez on 26/03/17.
 */

const Profile = require('../models/profile');
const User = require('../models/user');
const validate = require('../models/validate_schemas/profile');

function createdProfile(req, res) {

    let profile = new Profile();
    let params = req.body;

    if(validate(params)){

        User.findOne({_id: params.user},(error, user)=>{
            if(user){
                profile.avatar = params.avatar;
                profile.full_name = params.full_name;
                profile.birthdate = params.birthdate;
                profile.user = params.user;
                profile.save((error, profileStored)=>{
                    if(error){
                        res.status(500).send({error: 'error-db'});
                    } else {
                        if(profileStored) {
                            res.status(201).send({status: 'ok', profileStored});
                        }else{
                            res.status(404).send({error: 'error-created'});
                        }
                    }
                });
            }else{
                if(error){
                    res.status(500).send({error: 'error-db'});
                }else {
                    res.status(200).send({error: 'not-exist-user'});
                }
            }
        });
    }else {
        res.status(200).send({error: validate.errors[0].field});
    }

}

function getProfile(req, res) {
    let id = req.params.id;
    if(id){
        Profile.findOne({_id: id},(error, profile)=>{
            if(profile){
                res.status(200).send({status:'ok', profile});
            }else {
                if(error){
                    res.status(500).send({error: 'not-exist-profile'});
                }
            }
        });
    }else {
        res.status(400).send({error: 'not-exist-url'});
    }
}

function updateProfile(req, res) {
    let id = req.params.id;
    let params = req.body;
    if(id) {
        if (validate(params)) {
            User.findOne({_id:params.user},(error, user) => {
                if (user) {

                    Profile.findOneAndUpdate(id,params, (error, profileUpdate) => {
                        if (error) {
                            console.log(error);
                            res.status(500).send({error: 'error-db'});
                        } else {
                            if (profileUpdate) {
                                res.status(201).send({status: 'ok', profileUpdate});
                            } else {
                                res.status(404).send({error: 'error-update'});
                            }
                        }
                    });
                } else {
                    if (error) {

                        res.status(500).send({error: 'error-db'});
                    } else {
                        res.status(200).send({error: 'not-exist-user'});
                    }
                }
            });
        } else {
            res.status(200).send({error: validate.errors[0].field});
        }
    }else {
        res.status(400).send({error: 'not-exist-url'});
    }
}

module.exports = {
    createdProfile,
    getProfile,
    updateProfile
};