import React from "react";
import { Box, Typography } from "@mui/material";

const Banners = () => {
  const banners = [
    { bgColor: "linear-gradient(135deg, #FF5733, #FF8D33)", image: "/images/banners/b1.jpg", alt: "Банер 1", text: 'Трохи про наші іграшки' },
    { bgColor: "linear-gradient(135deg, #33AFFF, #3399FF)", image: "/images/banners/b2.jpg", alt: "Банер 2", text: 'Для будь-якого приводу' },
    { bgColor: "linear-gradient(135deg, #33FF99, #66FFB2)", image: "/images/banners/b3.jpg", alt: "Банер 3", text: 'Без діла лежати не буде' },
    { bgColor: "linear-gradient(135deg, #FFC300, #FFD700)", image: "/images/banners/banner4.jpg", alt: "Банер 4", text: 'Розмірна сітка товару' },
    ];

  return (
    <Box>
      {banners.map((banner, index) => (
        <React.Fragment key={index}>
          {/* Текст над баннером */}
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              padding: "10px 20px",
              margin: "20px auto",
              maxWidth: "70%",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#333",
              border: "2px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            {banner.text}
          </Typography>

          {/* Баннер */}
          <Box
            sx={{
              width: { sm: '50%', md: '80%' },
              height: 'auto',
              maxHeight: "100%", // Ограничить высоту
              margin: "20px auto",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: banner.bgColor,
              boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <img
              src={banner.image}
              alt={banner.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // Обеспечивает полное отображение
                borderRadius: "16px",
              }}
            />
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Banners;
