import {Schema, model, SchemaTypes} from 'mongoose';

const userSchema = new Schema({
    firstName: { type: SchemaTypes.String, required: true },
    lastName: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true },
    password: { type: SchemaTypes.String, required: true },
    role: { type: SchemaTypes.String, default: 'user' },
    status: { type: SchemaTypes.String, default: 'active'} //new, active, blocked, deleted, archived
});

const User = model('User', userSchema); 
export default User;