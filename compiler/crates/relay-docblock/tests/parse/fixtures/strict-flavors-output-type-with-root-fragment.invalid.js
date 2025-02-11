/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// expected-to-throw
// relay:enable_strict_resolver_flavors
// relay:enable_output_type
// relay:allow_legacy_verbose_syntax

/**
 * @RelayResolver
 * @onType User
 * @fieldName favorite_page
 * @rootFragment myRootFragment
 * @outputType SomeType
 *
 * The user's favorite page! They probably clicked something in the UI
 * to tell us that it was their favorite page and then we put that in a
 * database or something. Then we got that info out again and put it out
 * again. Anyway, I'm rambling now. Its a page that the user likes. A lot.
 */
 graphql`
 fragment myRootFragment on User {
   name
 }
`
