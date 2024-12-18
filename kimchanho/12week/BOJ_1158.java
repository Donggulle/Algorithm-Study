import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class BOJ_1158 {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    int n = Integer.parseInt(st.nextToken());
    int k = Integer.parseInt(st.nextToken());

    Queue<Integer> queue = new LinkedList<>();
    for (int i = 1; i <= n; i++) {
      queue.offer(i);
    }

    int count = 0;
    StringBuilder sb = new StringBuilder("<");
    while (!queue.isEmpty()) {
      count++;
      int person = queue.poll();
      if (count == k) {
        sb.append(person).append(", ");
        count = 0;
        continue;
      }
      queue.offer(person);
    }
    int lastIndex = sb.lastIndexOf(",");
    sb.replace(lastIndex, sb.length(), ">");
    System.out.println(sb);
  }

}
