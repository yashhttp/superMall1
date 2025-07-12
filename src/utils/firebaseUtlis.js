import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Fetch all documents from a collection
export const fetchCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add new document to a collection
export const addToCollection = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};
