
export const mapAgreementToCard = (agreement) => {
    const descriptionLarge = [];

    if (agreement.companyBenefits) {
        descriptionLarge.push({
            title: "BENEFICIOS: ",
            descriptions: [agreement.companyBenefits],
        });
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

    return {
        image: agreement.logoPhoto?.url || null,
        title: agreement.title,
        descriptionLarge: descriptionLarge,
    };
};