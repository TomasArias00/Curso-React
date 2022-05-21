import { async, stringify } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs,Timestamp, setDoc, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'


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



export async function createBuyOrder(orderData, finisOrder) {
    const buyTimestamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimestamp
    };
    
    console.log("Order data: ",orderWithDate)

    const myCollection = collection(firestoreDb, 'buyOrders');
    const orderDoc = await addDoc(myCollection, orderWithDate);
    Swal.fire({
        title: 'Gracias por tu compra!',
        text: 'El id de tu comra es: '+orderDoc.id,
        icon: 'success',
        confirmButtonText: 'Continuar'}
    )
    console.log("Order ID: ",orderDoc.id)
}

// export async function dataToFirebase(){

//     const PRODUCTS = [
//         {
//             'title': 'PIZZA FRIZZIO',
//             'price': 400,
//             'category': 'frizzio',
//             'stock': 6,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0112/0112_Card_637800188658799777.jpg'
//         },
//         {
//             'title': 'PECHUGAS DE POLLO',
//             'price': 350,
//             'category': 'frizzio',
//             'stock': 4,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0110/0110_Card_637776874900451468.jpg'
//         },
//         {
//             'title': 'HAMBURGUESA FRIZZIO',
//             'price': 450,
//             'category': 'frizzio',
//             'stock': 10,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0104/0104_Card_637800146443854419.jpg'
//         },
//         {
//             'title': 'PAPAS BASTON',
//             'price': 300,
//             'category': 'frizzio',
//             'stock': 5,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0107/0107_Card_637776831581470522.jpg'
//         },
//         {
//             'title': 'BASTONCITOS DE MUZZARELLA',
//             'price': 450,
//             'category': 'frizzio',
//             'stock': 10,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0113/0113_Card_637800222593033435.jpg'
//         },
//         {
//             'title': 'PALITO CREMOSO',
//             'price': 150,
//             'category': 'palitos',
//             'stock': 25,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0106/0106_Card_637776871658820323.jpg'
//         },
//         {
//             'title': 'PICO DULCE',
//             'price': 160,
//             'category': 'palitos',
//             'stock': 12,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0108/0108_Card_637776872682921876.jpg'
//         },
//         {
//             'title': 'PALITO BOMBÓN',
//             'price': 180,
//             'category': 'palitos',
//             'stock': 30,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0085/0085_Card_637776812366309687.jpg'
//         },
//         {
//             'title': 'BOMBON ESCOCÉS',
//             'price': 200,
//             'category': 'BOMBON, HELADO, ALL',
//             'stock': 15,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0081/0081_Card_637775105165974862.jpg'
//         },
    
//         {
//             'title': 'BOMBÓN V.SPLIT',
//             'price': 180,
//             'category': 'BOMBON, HELADO, ALL',
//             'stock': 30,
//             'img': 'https://gestion.clubgrido.com.ar:4430/Public/ImgExchange/0064/0064_Card_637517736821881467.jpg'
//         },
    
    
//     ];

//     const myCollection = collection(firestoreDb, 'items');

//     PRODUCTS.forEach((item) =>{
//         const newDoc = doc(myCollection);
//         setDoc(newDoc, item).then(() => {
//             console.log("Document written width id: ", newDoc.id)})
//         .catch(err => {
//             console.error("Error adding document", err);
//         });
//     });
// };