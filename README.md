# My Blog

```cmd
npm run dev
```

## TODO

### nextjs-toploader 度条组件在next.js14上有问题

> https://github.com/TheSGJ/nextjs-toploader/issues/56

但是还能用

```
import * as NProgress from "nprogress";

useEffect(() => {
    NProgress.done();
}, [pathname, router]);
```

现阶段（2023-12-07）有问题，需要手动停止
