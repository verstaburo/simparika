/* eslint-disable */
const $ = window.$;

export default function products() {
  const
    buttonClass = '.js-dog-button',
    productClass = '.product',
    itemClass = '.products__item',
    sectionClass = '.products',
    productsClass = '.products__products',
    navClass = '.products__navigation',
    activeClass = 'is-active';

  $(buttonClass).click(function () {
    if ($(this).hasClass(activeClass)) return;

    const
      el = $(this),
      section = el.parents(sectionClass),
      elItem = el.parents(itemClass),
      products = el.parents(productsClass),
      nav = section.find(navClass),
      index = elItem.length > 0 ? elItem.index() : el.index(),
      item = section.find(`${itemClass}:eq(${index})`);

    section.find(`.${activeClass}`).removeClass(activeClass);

    products.find(`${buttonClass}:eq(${index})`).addClass(activeClass);
    item.addClass(activeClass).find(productClass).addClass(activeClass);

    nav.find(`${buttonClass}:eq(${index})`).addClass(activeClass);
  });

  $('.js-product-select').change(function () {
    const
      el = $(this),
      selectIndex = el[0].selectedIndex,
      section = el.parents(sectionClass),
      item = section.find(`${itemClass}:eq(${selectIndex}) ${productClass}`);

    item[0].click();
  });
}
/* eslint-enable */
