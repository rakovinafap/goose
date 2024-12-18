import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#003366',
        color: '#fff',
        padding: '3rem 1rem',
        marginTop: '2rem',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        {/* Логотип или Название */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '1rem',
            fontFamily: 'Comic Sans MS, sans-serif',
          }}
        >
          Гусак 2024
        </Typography>

        {/* Гифка */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <img
            src="/images/gagaga.gif"
            alt="Гусь"
            style={{
              width: '150px',
              height: 'auto',
              borderRadius: '50%',
              border: '3px solid #fff',
            }}
          />
        </Box>

        {/* Текст */}
        <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        Ласкаво просимо у світ затишку! <br/> Всі наші товари створені з любов'ю.
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © 2024 Volia. Усі права захищені.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
