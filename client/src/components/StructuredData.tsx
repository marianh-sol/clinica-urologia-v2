import React from 'react';

export default function StructuredData() {
    const physicianSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Jorge J. Delgado Rodríguez",
        "image": "https://clinica-urologia-static.onrender.com/images/doctor-profile-stylized.png",
        "@id": "https://clinica-urologia-static.onrender.com/#physician",
        "url": "https://clinica-urologia-static.onrender.com",
        "telephone": "+528335350020",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Miguel Hidalgo 3909, Colonia Guadalupe, Consultorio 407",
            "addressLocality": "Tampico",
            "addressRegion": "Tamaulipas",
            "postalCode": "89120",
            "addressCountry": "MX"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.2576,
            "longitude": -97.8647
        },
        "medicalSpecialty": "Urology",
        "description": "El Dr. Jorge J. Delgado Rodríguez es un cirujano urólogo certificado en Tampico, especialista en cirugía de mínima invasión, salud prostática y litiasis renal.",
        "memberOf": [
            {
                "@type": "Organization",
                "name": "Consejo Nacional Mexicano de Urología"
            },
            {
                "@type": "Organization",
                "name": "American Urological Association (AUA)"
            },
            {
                "@type": "Organization",
                "name": "Sociedad Mexicana de Urología"
            }
        ],
        "availableService": [
            {
                "@type": "MedicalProcedure",
                "name": "Tratamiento de Litiasis Renal"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Cirugía de Próstata de Mínima Invasión"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Vasectomía"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
    );
}
