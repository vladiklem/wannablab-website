import firebase from "firebase";
import { firebaseConfig } from "constants/firebase";

class FirebaseService {
    constructor() {
        this.init = this.init.bind(this);
        this.get = this.get.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    init() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        this.db = firebase.firestore();
    }

    add(slug, entity) {
        return this.db.collection(slug).add(entity);
    }

    get(slug) {
        return this.db.collection(slug).get();
    }

    update(slug, id, entity, options) {
        return this.db.collection(slug).doc(id).set(entity, options);
    }

    delete(slug, id) {
        return this.db.collection(slug).doc(id).delete();
    }
}

export const firebaseService = new FirebaseService();
