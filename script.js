console.log("JS is working");
const tabs = document.querySelectorAll('.tabs');
const category = document.querySelectorAll('.category');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 1. 切换按钮样式
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const type = tabs.dataset.type;

    // 2. 显示对应商品
    category.forEach(category => {
      category.classList.remove('show');

      if (category.dataset.type === type) {
        category.classList.add('show');
      }
    });
  });
});
