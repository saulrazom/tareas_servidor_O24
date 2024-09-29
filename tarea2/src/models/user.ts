import {Schema, model, SchemaTypes} from 'mongoose';
import bcrypt from 'bcryptjs'; 

const userSchema = new Schema({
    firstName: { type: SchemaTypes.String, required: true },
    lastName: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true },
    password: { type: SchemaTypes.String, required: true },
    role: { type: SchemaTypes.String, default: 'user' },
    status: { type: SchemaTypes.String, default: 'active'} //new, active, blocked, deleted, archived
});

//Encriptación de contraseña
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

const User = model('User', userSchema); 
export default User;