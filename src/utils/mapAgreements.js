import {AgreementTraining} from "../data-list/agreementTraining";

export const mapAgreementToCard = (agreement) => {
    const descriptionLarge = [];

    const getTrainingLabel = (value) => {
        const found = AgreementTraining.find((item) => item.value === value);
        return found ? found.label : value;
    };

    if (agreement.companyBenefits) {
        descriptionLarge.push({
            title: "BENEFICIOS: ",
            descriptions: [agreement.companyBenefits],
        });
    }

    if (agreement.educationalInstitutionBenefits && agreement.educationalInstitutionBenefits.length > 0) {
        const validBenefits = agreement.educationalInstitutionBenefits.filter(
            (b) => b.training || b.discount || b.description
        );

        if (validBenefits.length > 0) {
            const eduBenefitsHtml = validBenefits.map((benefit) => `
                <div style="margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #eaeaea;">
                    ${
                benefit.training
                    ? `<strong>Formación:</strong> ${getTrainingLabel(benefit.training)}<br/>`
                    : ""
            }
                    ${benefit.discount ? `<strong>Descuento:</strong> <span style="color: red;">${benefit.discount}</span><br/>` : ""}
                    ${benefit.description ? `<div style="margin-top: 0.5rem;">${benefit.description}</div>` : ""}
                </div>
            `);

            descriptionLarge.push({
                title: "BENEFICIOS EDUCATIVOS: ",
                descriptions: eduBenefitsHtml,
            });
        }
    }

    if (agreement.faculties && agreement.faculties.length > 0) {
        const validFaculties = agreement.faculties.filter((f) => typeof f === "string" && f.trim() !== "");

        if (validFaculties.length > 0) {
            const facultiesHtml = `
                <ul style="margin-left: 1.5rem; list-style-type: disc;">
                    ${validFaculties.map((f) => `<li>${f}</li>`).join("")}
                </ul>
            `;

            descriptionLarge.push({
                title: "FACULTADES: ",
                descriptions: [facultiesHtml],
            });
        }
    }

    if (agreement.scope) {
        descriptionLarge.push({
            title: "ALCANCE: ",
            descriptions: [agreement.scope],
        });
    }

    const contactDescriptions = [];
    if (agreement.contact?.phones && agreement.contact.phones.length > 0) {
        agreement.contact.phones.forEach((phone) => {
            if (phone) contactDescriptions.push(`<a href='tel:${phone}'>${phone}</a>`);
        });
    }

    if (agreement.contact?.emails && agreement.contact.emails.length > 0) {
        agreement.contact.emails.forEach((email) => {
            if (email) contactDescriptions.push(`<a href='mailto:${email}'>${email}</a>`);
        });
    }

    if (contactDescriptions.length > 0) {
        descriptionLarge.push({
            title: "CONTACTOS: ",
            descriptions: contactDescriptions,
        });
    }

    if (agreement.qrCode?.url || agreement.qrLink) {
        descriptionLarge.push({
            title: "CÓDIGO QR / ENLACE DE ACCESO: ",
            qrCode: agreement.qrCode?.url || null,
            qrLink: agreement.qrLink || null,
        });
    }

    return {
        image: agreement.logoPhoto?.url || null,
        title: agreement.title,
        descriptionLarge: descriptionLarge,
        isRenewalPending: agreement.isRenewalPending || false,
        priority: agreement.priority || 0,
    };
};