import {collection, doc, getDocs, query, setDoc, where} from 'firebase/firestore'
import {db} from "./firebase"
import React from 'react'

interface Response{
    questionID: number;
    isYes: boolean;
}

export default function useAddResult()
{
    const addResult = React.useCallback((response: Response) => {
        const collectionRef = collection(db, "Responses");
        const docRef = doc(collectionRef);
        setDoc(docRef, response);
    }, []);

    return addResult;
}

export function useGetResult(questionID: number): [number, number, boolean]
{
    const [percentageYes, setPercentageYes] = React.useState(0);
    const [percentageNo, setPercentageNo] = React.useState(0);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const loadQuestionStats = async () => {
        const collectionRef = collection(db, "Responses");
        const queryRef = query(collectionRef, where("questionID", "==", questionID));
        setIsLoaded(false);
        const docResults = await getDocs(queryRef);
        setIsLoaded(true);
        const docs = docResults.docs.map(doc => doc.data() as Response);
        const yesCount = docs.filter((docValue) => docValue.isYes).length;
        const noCount = docs.filter((docValue) => !docValue.isYes).length;
        setPercentageYes(yesCount / docs.length);
        setPercentageNo(noCount / docs.length);
    }

    React.useEffect(() => {
        loadQuestionStats();
    }, [])

    return [percentageYes, percentageNo, isLoaded];
}