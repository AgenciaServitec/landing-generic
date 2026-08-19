import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { ListCards } from "../../components";
import { mapAgreementToCard } from "../../utils/mapAgreements";

export const TacnaAgreementsSection = () => {
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api-korekenke.web.app/agreements?department=tacna"
        );
        const data = await response.json();
        setAgreements(data);
      } catch (error) {
        console.error("Error fetching agreements:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Spin spinning={loading}>
      <ListCards
        title="Convenios Provinciales Tacna"
        items={agreements.map(mapAgreementToCard)}
        type="secondary"
      />
    </Spin>
  );
};
