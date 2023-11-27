"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const createGalleryItem = (image) => {
  const listItem = document.createElement("li");
  listItem.className = "frame";
  const imageItem = document.createElement("img");
  imageItem.src = image.url;
  imageItem.alt = image.alt;
  listItem.appendChild(imageItem);
  return listItem;
};

const galleryItems = images.map(createGalleryItem);
gallery.append(...galleryItems);

// Копіюємо елементи галереї разом з дочерними
const duplicateGallery = gallery.cloneNode(true);

// Вставляємо копію після оригінальної галереї
gallery.after(duplicateGallery);

const wraper = document.createElement("div");
wraper.className = "wraper-gallery";

// Знаходимо батьківський елемент
const parentOfGallery = gallery.parentNode;

// Додаємо обгортку (div) перед gallery
parentOfGallery.insertBefore(wraper, gallery);

// Переміщуємо галереї в новостворений обгортку div
wraper.appendChild(gallery);
wraper.appendChild(duplicateGallery);
