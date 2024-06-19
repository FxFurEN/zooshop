-- Creating the "Categories" table
CREATE TABLE Categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Creating the "Products" table
CREATE TABLE Products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INTEGER NOT NULL,
    sing INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

CREATE TABLE Orders (
  id SERIAL PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  address2 TEXT,
  city TEXT NOT NULL,
  zip TEXT NOT NULL
);



INSERT INTO Categories (name) VALUES
    ('Еда'),
    ('Игрушка'),
    ('Лежанки'),
    ('Миски'),
    ('Одежда');

-- Добавление примеров товаров для кошек
INSERT INTO Products (name, category_id, sing, price, description, image_url) VALUES
    ('Royal Canin Adult 400г', 1, 1, 2500.00, 'Корм Royal Canin Adult для взрослых кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/british_shorthair_new1.jpg'),
    ('Лежанка-подушка для кошек', 3, 1, 5000.00, 'Мягкая и удобная лежанка-подушка для домашних любимцев', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/6402546279.jpg'),
    ('Игрушка-мышь для кошек', 2, 1, 1500.00, 'Яркая и прочная игрушка-мышь для развлечения кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/images.jpg'),
    ('Подставка для миски кошки', 4, 1, 3000.00, 'Удобная подставка для миски, облегчающая прием пищи для кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/398333533d7cc7253eab5f51f85f1fde.jpg'),
    ('Туалет для кошек с крышкой', 3, 1, 6000.00, 'Компактный и гигиеничный туалет для кошек с крышкой', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/1021618980.jpg'),
    ('Ошейник с колокольчиком для кошек', 5, 1, 2000.00, 'Ошейник с мягкой подкладкой и колокольчиком для безопасных прогулок кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/2farjw1ppqyca2lgdc8mu969w04xv5h6.jpg'),
    ('Когтеточка-домик для кошек', 3, 1, 7000.00, 'Функциональный и стильный когтеточка-домик для кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/6334702594.jpg'),
    ('Корм Felix 100г', 1, 1, 350.00, 'Влажный корм Felix для взрослых кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/felix-korm-konservirovannyj-polnoracionnyj-dlya-vzroslykh-koshek-govyadina-v-zhele-s-tomatami-85-gr.jpg'),
    ('Транспортная переноска для кошек', 2, 1, 8000.00, 'Прочная и безопасная транспортная переноска для перевозки кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/6123397735.jpg'),
    ('Игровой комплекс для кошек', 3, 1, 10000.00, 'Многофункциональный игровой комплекс для активного времяпровождения кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/6334709626.jpg');

-- Добавление примеров товаров для собак
INSERT INTO Products (name, category_id, sing, price, description, image_url) VALUES
    ('Корм для собак Royal Canin Medium Adult 3кг', 1, 2, 8000.00, 'Корм Royal Canin Medium Adult для взрослых средних пород собак', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/1.jpg'),
    ('Мяч для собак', 2, 2, 2000.00, 'Прочный мяч для игр и тренировок собак', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/2.jpg?t=2024-06-01T09%3A58%3A12.849Z'),
    ('Ошейник-шлейка для собак', 5, 2, 3000.00, 'Ошейник-шлейка с мягкой подкладкой для комфортной прогулки с собакой', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/3.jpg?t=2024-06-01T09%3A58%3A21.068Z'),
    ('Комбинезон для собак', 5, 2, 6000.00, 'Теплый и стильный комбинезон для защиты собаки от холода', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/4.jpg?t=2024-06-01T09%3A58%3A29.738Z'),
    ('Коврик-теплый для собак', 3, 2, 4500.00, 'Мягкий и теплый коврик для собак для уютного отдыха', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/5.jpg'),
    ('Миска для собак', 4, 2, 1500.00, 'Прочная и удобная миска для кормления собаки', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/6.jpg'),
    ('Кость-игрушка для собак', 2, 2, 2500.00, 'Натуральная кость-игрушка для занятий жевательными играми с собакой', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/7.jpg'),
    ('Щетка-массажер для собак', 2, 2, 3500.00, 'Удобная и эффективная щетка-массажер для ухода за шерстью собаки', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/8.jpeg'),
    ('Поводок-рулетка для собак', 2, 2, 4000.00, 'Надежный поводок-рулетка для свободного перемещения собаки во время прогулки', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/9.jpg'),
    ('Спальник для собак', 3, 2, 7000.00, 'Мягкий и уютный спальник для комфортного сна собаки', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/10.jpg');




-- Добавление товаров в категорию "Еда" для кошек
INSERT INTO Products (name, category_id, sing, price, description, image_url) VALUES
    ('Purina ONE Adult 1.5кг', 1, 1, 1500.00, 'Сухой корм Purina ONE для взрослых кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/11.jpg'),
    ('Whiskas сухой корм 1.75кг', 1, 1, 1200.00, 'Сухой корм Whiskas для взрослых кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/12.jpg'),
    ('Gourmet Gold паштет 85г', 1, 1, 200.00, 'Консервированный корм Gourmet Gold для кошек', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/cats/13.jpg');

-- Добавление товаров в категорию "Еда" для собак
INSERT INTO Products (name, category_id, sing, price, description, image_url) VALUES
    ('Pedigree Adult 2кг', 1, 2, 1800.00, 'Сухой корм Pedigree для взрослых собак', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/11.jpg?t=2024-06-02T11%3A11%3A39.555Z'),
    ('Chappi сухой корм 15кг', 1, 2, 4500.00, 'Сухой корм Chappi для взрослых собак', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/12.jpg'),
    ('Eukanuba Puppy Large Breed 3кг', 1, 2, 3500.00, 'Сухой корм Eukanuba для щенков крупных пород', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/13.jpg'),
    ('Hills Science Plan Adult 1.5кг', 1, 2, 3000.00, 'Сухой корм Hills Science Plan для взрослых собак', 'https://ghauuxtqqagimisyqajv.supabase.co/storage/v1/object/public/dogs/14.jpg');
    