import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { app } from "../firebase/config";
import { RecipesData } from "../interfaces/db_interfaces";

const useRecipes = () => {
  const [recipesData, setRecipesData] = useState<RecipesData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore(app);

    const q = query(collection(db, "recipes"));
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          let tablica: RecipesData[] = [];
          querySnapshot.forEach((doc) => {
            tablica = [...tablica, doc.data() as RecipesData];
          });
          setRecipesData(tablica);
        } else {
          setRecipesData([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [recipesData, loading]);

  return { recipesData };
};

export default useRecipes;
