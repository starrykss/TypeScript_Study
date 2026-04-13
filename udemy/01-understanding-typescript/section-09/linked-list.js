'use strict';
class ListNode {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
}
class LinkedList {
  root;
  length = 0;
  // 노드 추가
  add(value) {
    const node = new ListNode(value);
    // Case 1 : 리스트가 비어 있을 때
    // root
    //  ↓
    // [10]
    if (!this.root) {
      this.root = node; // 루트 설정
    }
    // Case 2 : 이미 노드가 있을 때
    // [10] → [20] → [30]
    //                 ↑ current
    else {
      let current = this.root;
      // 끝까지 이동
      while (current.next) {
        current = current.next;
      }
      // 마지막 노드 뒤에 새 노드 연결
      // [10] → [20] → [30] → [40]
      current.next = node;
    }
    // 길이 증가
    this.length++;
  }
}
// 참고) 성능이 개선된 연결 리스트
// -> 이전 코드에서는 매번 끝까지 순회(O(n)) 해야 했지만,
// -> 아래 코드에서는 바로 tail을 알고 있어서 즉시 추가가 가능 (O(1))
class LinkedList2 {
  root; // 시작 노드
  tail; // 마지막 노드 (항상 마지막 노드 가리킴.)
  length = 0;
  // 노드 추가
  add(value) {
    const node = new ListNode(value);
    // Case 1 : 리스트가 비어 있을 때
    // root, tail
    //    ↓
    //   [10]
    if (!this.root || !this.tail) {
      // 첫 노드는 시작이자 끝
      this.root = node;
      this.tail = node;
    }
    // Case 2 : 이미 노드가 있을 때
    // root                tail
    //  ↓                   ↓
    // [10] → [20] → [30]
    else {
      this.tail.next = node; // 새 노드 연결
      // [10] → [20] → [30] → [40]
      //                           ↑ (아직 tail 아님)
      this.tail = node; // tail 이동
      // root                tail
      //  ↓                   ↓
      // [10] → [20] → [30] → [40]
    }
    // 길이 증가
    this.length++;
  }
  // 특정 위치에 노드 삽입
  insertAt(value, pos) {
    if (pos > -1 && pos < this.length && this.root) {
      let current = this.root;
      let index = 0;
      let previous = current;
      let node = new ListNode(value);
      // Case 1: 맨 앞에 삽입 (pos === 0)
      if (pos === 0) {
        node.next = this.root;
        this.root = node;
      } else {
        // Case 2: 중간/끝 삽입
        while (index++ < pos && current.next) {
          previous = current;
          current = current.next;
        }
        // [10] → [20] → [30]
        //          ↑previous
        //               ↑current
        node.next = current;
        previous.next = node;
        // [10] → [20] → [NEW] → [30]
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  // 특정 위치의 노드 삭제
  removeAt(pos) {
    if (pos > -1 && pos < this.length && this.root) {
      let current = this.root;
      let previous = current;
      let index = 0;
      // Case 1: 맨 앞 삭제 (pos === 0)
      if (pos === 0) {
        this.root = current.next;
      } else {
        // Case 2: 중간/끝 삭제
        while (index++ < pos && current.next) {
          previous = current;
          current = current.next;
        }
        // [10] → [20] → [30]
        //          ↑삭제 대상
        previous.next = current.next;
        // [10] → [30]
      }
      this.length--;
      return current;
    } else {
      return null;
    }
  }
  // 연결 리스트 길이 가져오기
  getNumberOfElements() {
    return this.length;
  }
  // 내용물 출력
  print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const numberList = new LinkedList2();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();
console.log('--- NOW REMOVING INDEX 1 ---');
numberList.removeAt(1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();
console.log('--- NOW INSERTING AT INDEX 1 ---');
numberList.insertAt(100, 1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();
const nameList = new LinkedList2();
