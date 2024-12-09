import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useCart } from '../contexts/CartContext';

const OrderForm = ({ onOrderComplete }) => {
    const { cartItems, clearCart } = useCart();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Собираем данные заказа
        const orderData = {
            customer: { name, phone },
            items: cartItems,
            total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), // Общая стоимость
        };

        // Отправка данных на сервер или обработка
        console.log('Order submitted:', orderData);

        // Очистка корзины после оформления
        clearCart();

        // Сообщаем родительскому компоненту об успешном заказе
        onOrderComplete(orderData); // Передаем данные о заказе в родительский компонент
        setName(''); // Сброс формы
        setPhone('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Оформить заказ
            </Button>
        </Box>
    );
};

export default OrderForm;
