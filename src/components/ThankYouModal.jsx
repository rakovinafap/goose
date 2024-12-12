import React from 'react';
import { Modal, Box, Typography, Button, Avatar, Divider } from '@mui/material';

const ThankYouModal = ({ open, onClose, orderDetails }) => {
    console.log("Пришло в форму", orderDetails);
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="order-success-modal-title">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: 300, sm: 400 },
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography id="order-success-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    Дякую за ваше замовлення!
                </Typography>
                <Typography sx={{ mt: 2, fontSize: '1rem', color: '#555' }}>
                    Ми зв'яжемося з вами найближчим часом.
                </Typography>

                {/* Заказ и фото товаров */}
                {orderDetails && (
                    <Box sx={{ mt: 2, textAlign: 'left' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                            Ваше замовлення:
                        </Typography>
                        <Box>
                            {orderDetails.items.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: 2,
                                        flexWrap: 'nowrap', // Запрещаем перенос строк
                                    }}
                                >
                                    {/* Аватар */}
                                    <Avatar
                                        src={item.image}
                                        alt={item.name}
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 1,
                                            objectFit: 'contain',
                                            marginRight: 2,
                                        }}
                                    />
                                    {/* Текст в строку */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            flex: 1,
                                            gap: 1,
                                            flexWrap: 'nowrap', // Запрещаем перенос текста
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', flex: 1 }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666', flexShrink: 0 }}>
                                            {item.quantity} x {item.price} грн
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Всього: {orderDetails.total} грн
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2">
                            <strong>Ім'я:</strong> {orderDetails.customer.name}
                            <br />
                            <strong>Телефон:</strong> {orderDetails.customer.phone}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2">
                            <strong>Коментар:</strong> {orderDetails.customer.comment}
                            
                        </Typography>
                    </Box>
                )}

                <Button
                    onClick={onClose}
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Закрити
                </Button>
            </Box>
        </Modal>
    );
};

export default ThankYouModal;
