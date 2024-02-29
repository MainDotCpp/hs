export const components = [
  {
    name: '图片',
    initialValue: {
      type: 'image',
      position: 'static' as 'static' | 'sticky' | 'fixed' | undefined,
      top: undefined as number | undefined,
      bottom: undefined as number | undefined,
      animation: 'none',
      src: ['http://66.112.210.231/access/placehold.png'],
      padding_x: 0,
      padding_y: 0,
      shadow_level: 0,
      link: undefined,
    },
  },
  {
    name: '轮播图',
    initialValue: {
      type: 'swiper',
      autoPlay: true,
      autoPlaySpeed: 3000,
      fade: false,
      infinite: true,
      images: ['http://66.112.210.231/access/placehold.png'],
    },
  },
  {
    name: '富文本',
    initialValue: { type: 'draft', content: '<p>请编辑内容</p>' },
  },
];
