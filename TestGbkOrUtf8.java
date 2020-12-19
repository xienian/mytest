import java.io.UnsupportedEncodingException;

public class TestGbkOrUtf8 {

	public static void main(String[] args) throws Exception {
		System.out.println("本系统的默认编码:"+System.getProperty("file.encoding"));
		String name="谢念，高富帅";
		//本系统编码
		byte[] start=name.getBytes();
		System.out.println("字符串字节个数："+start.length);
		//转为utf8格式字符
		byte[] utf=name.getBytes("utf-8");
		System.out.println("utf8的字节个数："+utf.length);
		//转为gbk
		byte[] gbk=name.getBytes("gbk");
		System.out.println("gbk的字节个数："+gbk.length);
		String gbkToUtf8=new String(gbk,"gbk");
		System.out.println(gbkToUtf8);
		System.out.println("将gbk字节流转为字符串，字符串的的字节长度："+gbkToUtf8.getBytes().length);

	}

}
