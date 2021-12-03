class Shared {
    /**
     * 获取 Text
     */
    getText () {
        // 子应用独立运行时，在 localStorage 中获取 text
        return localStorage.getItem("text") || "";
    }

    /**
     * 设置 Text
     */
    setText (text) {
        // 子应用独立运行时，在 localStorage 中设置 text
        localStorage.setItem("text", text);
    }
}

class SharedModule {
    static shared = new Shared();

    /**
     * 重载 shared
     */
    static overloadShared (shared) {
        SharedModule.shared = shared;
    }

    /**
     * 获取 shared 实例
     */
    static getShared () {
        return SharedModule.shared;
    }
}

export default SharedModule;
