## 使用`open`打开文件

```python
f = open(path,标识符,encoding=编码格式,errors='ignore')

# 调用f.read()方法可以把数据一次性读入内存中
# 调用f.read(size)方法可以读取指定字节数量的内容
# 调用f.readline()方法可以读取一行内容
# 调用f.readlines()一次性读取所有内容并按行返回list

标识符号如下
1. r 只读
2. w 可重写
3. rb 可读二进制
4. wb 可写二进制
5. a 追加
```