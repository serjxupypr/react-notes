import mongoose, { mongo } from 'mongoose';
import config from '../../etc/config.json';

import '../models/note';

const Note = mongoose.model['Note'];

export function setUpConntection () {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
    console.log(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdDate: new Date()
    });

    return Note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}