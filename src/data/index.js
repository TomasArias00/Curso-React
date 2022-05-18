import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAStNRLvxVT7yOYyuVEU0Nv9KkOS01cC3k",
    authDomain: "proyecto-react-grido.firebaseapp.com",
    projectId: "proyecto-react-grido",
    storageBucket: "proyecto-react-grido.appspot.com",
    messagingSenderId: "183620935694",
    appId: "1:183620935694:web:d92913582ce6bdf7eadc5f"
};

const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

export default firestoreDb;

export async function getAllItems() {
    const myCollection = collection( firestoreDb, 'items');
    const productsSnap = await getDocs(myCollection);

    return productsSnap.docs.map(doc => {
        return{
        ...doc.data(),
        id: doc.id
        }
    }
        );
}

export async function getItemsByCategory(categoryId){
    const myCollection = collection(firestoreDb, 'items');

    const queryProduct = query(myCollection, where("category", "==", categoryId)) ;

    const productsSnap = await getDocs(queryProduct);

    return productsSnap.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    })

}

export async function getItem(id){
    const myCollection = collection(firestoreDb, 'items')
    const productRef = doc(myCollection, id);
    const productsSnap = await getDoc(productRef);

    return{ ...productsSnap.data(), id: productsSnap.id}
}