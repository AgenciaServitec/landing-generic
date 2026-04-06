// hooks/useAgreementsApi.js
import { useState, useEffect } from "react";
import { mapAgreementToCard } from "../utils/mapAgreements";

export const useAgreementsApi = () => {
    const [agreementsData, setAgreementsData] = useState({
        bancos: [],
        salud: [],
        tiendas: [],
        financieras: [],
        seguros: [],
        transporte: [],
        hoteles: [],
        tecnologia: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAgreements = async () => {
            try {
                const response = await fetch("https://api-korekenke.web.app/agreements?category=company");
                const data = await response.json();

                const bancos = data.filter(a => a.subcategory === "bank").map(mapAgreementToCard);
                const salud = data.filter(a => a.subcategory === "health").map(mapAgreementToCard);
                const tiendas = data.filter(a => a.subcategory === "store").map(mapAgreementToCard);
                const financieras = data.filter(a => a.subcategory === "financial").map(mapAgreementToCard);
                const seguros = data.filter(a => a.subcategory === "Insurance Companies").map(mapAgreementToCard);
                const transporte = data.filter(a => a.subcategory === "journey").map(mapAgreementToCard);
                const hoteles = data.filter(a => a.subcategory === "Hotel").map(mapAgreementToCard);
                const tecnologia = data.filter(a => a.subcategory === "Technical Services").map(mapAgreementToCard);

                setAgreementsData({
                    bancos,
                    salud,
                    tiendas,
                    financieras,
                    seguros,
                    transporte,
                    hoteles,
                    tecnologia
                });
            } catch (error) {
                console.error("Error obteniendo convenios:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAgreements();
    }, []);

    return { agreementsData, loading };
};