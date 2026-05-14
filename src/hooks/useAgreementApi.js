import { useState, useEffect } from "react";
import { mapAgreementToCard } from "../utils/mapAgreements";

export const useAgreementsApi = (templateType) => {
    const [agreementsData, setAgreementsData] = useState({
        bancos: [],
        salud: [],
        tiendas: [],
        financieras: [],
        seguros: [],
        transporte: [],
        hoteles: [],
        tecnologia: [],
        universidades: [],
        institutos: [],
        institutosIdiomas: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAgreements = async () => {
            try {
                const category = templateType === "saed" ? "educationalInstitution" : "company";

                const response = await fetch(`https://api-korekenke.web.app/agreements?category=${category}`);
                const data = await response.json();

                if (category === "company") {
                    setAgreementsData(prev => ({
                        ...prev,
                        bancos: data.filter(a => a.subcategory === "bank").map(mapAgreementToCard),
                        salud: data.filter(a => a.subcategory === "health").map(mapAgreementToCard),
                        tiendas: data.filter(a => a.subcategory === "store").map(mapAgreementToCard),
                        financieras: data.filter(a => a.subcategory === "financial").map(mapAgreementToCard),
                        seguros: data.filter(a => a.subcategory === "Insurance Companies").map(mapAgreementToCard),
                        transporte: data.filter(a => a.subcategory === "journey").map(mapAgreementToCard),
                        hoteles: data.filter(a => a.subcategory === "Hotel").map(mapAgreementToCard),
                        tecnologia: data.filter(a => a.subcategory === "Technical Services").map(mapAgreementToCard),
                    }));
                } else if (category === "educationalInstitution") {
                    setAgreementsData(prev => ({
                        ...prev,
                        universidades: data.filter(a => a.subcategory === "university").map(mapAgreementToCard),
                        institutos: data.filter(a => a.subcategory === "institute").map(mapAgreementToCard),
                        institutosIdiomas: data.filter(a => a.subcategory === "languageInstitute").map(mapAgreementToCard),
                    }));
                }
            } catch (error) {
                console.error("Error obteniendo convenios:", error);
            } finally {
                setLoading(false);
            }
        };

        if (templateType) {
            fetchAgreements();
        }
    }, [templateType]);

    return { agreementsData, loading };
};