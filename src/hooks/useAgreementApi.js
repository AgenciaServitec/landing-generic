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

                const sortByPriority = (a, b) => (a.priority || 0) - (b.priority || 0);

                if (category === "company") {
                    setAgreementsData(prev => ({
                        ...prev,
                        bancos: data.filter(a => a.subcategory === "bank").sort(sortByPriority).map(mapAgreementToCard),
                        salud: data.filter(a => a.subcategory === "health").sort(sortByPriority).map(mapAgreementToCard),
                        seguros: data.filter(a => a.subcategory === "Insurance Companies").sort(sortByPriority).map(mapAgreementToCard),
                        tiendas: data.filter(a => a.subcategory === "store").sort(sortByPriority).map(mapAgreementToCard),
                        financieras: data.filter(a => a.subcategory === "financial").sort(sortByPriority).map(mapAgreementToCard),
                        transporte: data.filter(a => a.subcategory === "journey").sort(sortByPriority).map(mapAgreementToCard),
                        hoteles: data.filter(a => a.subcategory === "Hotel").sort(sortByPriority).map(mapAgreementToCard),
                        tecnologia: data.filter(a => a.subcategory === "Technical Services").sort(sortByPriority).map(mapAgreementToCard),
                    }));
                } else if (category === "educationalInstitution") {
                    setAgreementsData(prev => ({
                        ...prev,
                        universidades: data.filter(a => a.subcategory === "university").sort(sortByPriority).map(mapAgreementToCard),
                        institutos: data.filter(a => a.subcategory === "institute").sort(sortByPriority).map(mapAgreementToCard),
                        institutosIdiomas: data.filter(a => a.subcategory === "languageInstitute").sort(sortByPriority).map(mapAgreementToCard),
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