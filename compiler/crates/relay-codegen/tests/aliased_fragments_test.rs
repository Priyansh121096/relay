/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<ef4dc6cec444448350b14fb2f6e7d3e4>>
 */

mod aliased_fragments;

use aliased_fragments::transform_fixture;
use fixture_tests::test_fixture;

#[tokio::test]
async fn aliased_fragment_on_abstract_type() {
    let input = include_str!("aliased_fragments/fixtures/aliased_fragment_on_abstract_type.graphql");
    let expected = include_str!("aliased_fragments/fixtures/aliased_fragment_on_abstract_type.expected");
    test_fixture(transform_fixture, "aliased_fragment_on_abstract_type.graphql", "aliased_fragments/fixtures/aliased_fragment_on_abstract_type.expected", input, expected).await;
}

#[tokio::test]
async fn aliased_fragment_spread() {
    let input = include_str!("aliased_fragments/fixtures/aliased_fragment_spread.graphql");
    let expected = include_str!("aliased_fragments/fixtures/aliased_fragment_spread.expected");
    test_fixture(transform_fixture, "aliased_fragment_spread.graphql", "aliased_fragments/fixtures/aliased_fragment_spread.expected", input, expected).await;
}

#[tokio::test]
async fn aliased_inline_fragment_spread() {
    let input = include_str!("aliased_fragments/fixtures/aliased_inline_fragment_spread.graphql");
    let expected = include_str!("aliased_fragments/fixtures/aliased_inline_fragment_spread.expected");
    test_fixture(transform_fixture, "aliased_inline_fragment_spread.graphql", "aliased_fragments/fixtures/aliased_inline_fragment_spread.expected", input, expected).await;
}
