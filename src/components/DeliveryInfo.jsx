import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Для красного акцента

const DeliveryInfo = () => {
  const steps = [
    { title: 'Заявка', description: 'Залишаєте заявку на сайті' },
    { title: 'Дзвінок', description: 'Наш менеджер уточнює деталі замовлення'},
    { title: 'Надсилання', description: 'Доставляємо ваш товар протягом 1-3 днів' },
    { title: 'Отримання', description: 'Оплачуєте при отриманні поштою' },
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        backgroundColor: '#EAF7FF',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginTop: '20px', 
        marginBottom: '5px'
      }}
    >
      <Card
        elevation={3}
        sx={{
          backgroundColor: '#F1FBFF',
          borderRadius: '16px',
          overflow: 'hidden',
          padding: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{
              fontFamily: 'Comic Sans MS, sans-serif',
              color: '#007ACC',
            }}
          >
            Доставка та Оплата
          </Typography>

          <Divider
            sx={{
              my: 2,
              backgroundColor: '#00A6D6',
              height: 3,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: 'Comic Sans MS, sans-serif', color: '#007ACC' }}
          >
            Доставка
          </Typography>
          <Typography variant="body2" gutterBottom>
          Доставимо замовлення протягом 1-3 днів.

          </Typography>

          <Divider
            sx={{
              my: 2,
              backgroundColor: '#00A6D6',
              height: 3,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: 'Comic Sans MS, sans-serif', color: '#007ACC' }}
          >
            Оплата
          </Typography>
          <Typography variant="body1" gutterBottom>
            Оплата замовлень здійснюється при отриманні товару.
          </Typography>

          <Divider
            sx={{
              my: 2,
              backgroundColor: '#00A6D6',
              height: 3,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: 'Comic Sans MS, sans-serif', color: '#007ACC' }}
          >
            Гарантії
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ми завжди перевіряємо товар перед відправкою та гарантуємо 100% якість.
          </Typography>

          <Divider
            sx={{
              my: 2,
              backgroundColor: '#00A6D6',
              height: 3,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: 'Comic Sans MS, sans-serif', color: '#007ACC' }}
          >
            Як це працює
          </Typography>
          <Grid container spacing={2}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    borderColor: '#00A6D6',
                    borderRadius: '12px',
                    padding: 2,
                    backgroundColor: '#EAF7FF',
                    textAlign: 'center',
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <FavoriteIcon
                        sx={{
                          fontSize: 40,
                          color: '#FF4C4C',
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontFamily: 'Comic Sans MS, sans-serif',
                        color: '#007ACC',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body2">{step.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DeliveryInfo;
