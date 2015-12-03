import Ember from 'ember';
import PaginationMixin from '../../../mixins/pagination';
import { module, test } from 'qunit';

module('Unit | Mixin | pagination');

test('it counts total pages', function(assert) {
  let PaginationObject = Ember.Object.extend(PaginationMixin);
  let subject = PaginationObject.create();

  subject.set('totalRecords', 300);
  let totalPages = subject.get('totalPages');

  assert.equal(subject.per_page, 30); // default
  assert.equal(totalPages, 10);
});

test('it knows when on the first page', function(assert) {
  let PaginationObject = Ember.Object.extend(PaginationMixin);
  let subject = PaginationObject.create();

  let firstPage = subject.get('isFirstPage');
  let lastPage = subject.get('isLastPage');

  assert.ok(firstPage);
  assert.notOk(lastPage);
});

test('it knows when on the last page', function(assert) {
  let PaginationObject = Ember.Object.extend(PaginationMixin);
  let subject = PaginationObject.create();

  subject.set('totalRecords', 300);
  subject.set('page', 30);

  let firstPage = subject.get('isFirstPage');
  let lastPage = subject.get('isLastPage');

  assert.notOk(firstPage);
  assert.ok(lastPage);
});

// test('it increases page with nextPage', function(assert) {
//   let PaginationObject = Ember.Object.extend(PaginationMixin);
//   let subject = PaginationObject.create();
//
//   subject.nextPage();
//
//   let page = subject.get('page');
//   assert.equal(page, 2);
// });
