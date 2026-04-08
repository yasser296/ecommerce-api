package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import org.openapitools.model.SellerUpdateInputAddress;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * SellerUpdateInput
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class SellerUpdateInput {

  private @Nullable String storeName;

  private @Nullable String phone;

  private @Nullable SellerUpdateInputAddress address;

  private @Nullable BigDecimal rating;

  public SellerUpdateInput storeName(@Nullable String storeName) {
    this.storeName = storeName;
    return this;
  }

  /**
   * Get storeName
   * @return storeName
   */
  
  @Schema(name = "storeName", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("storeName")
  public @Nullable String getStoreName() {
    return storeName;
  }

  @JsonProperty("storeName")
  public void setStoreName(@Nullable String storeName) {
    this.storeName = storeName;
  }

  public SellerUpdateInput phone(@Nullable String phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Get phone
   * @return phone
   */
  
  @Schema(name = "phone", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("phone")
  public @Nullable String getPhone() {
    return phone;
  }

  @JsonProperty("phone")
  public void setPhone(@Nullable String phone) {
    this.phone = phone;
  }

  public SellerUpdateInput address(@Nullable SellerUpdateInputAddress address) {
    this.address = address;
    return this;
  }

  /**
   * Get address
   * @return address
   */
  @Valid 
  @Schema(name = "address", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("address")
  public @Nullable SellerUpdateInputAddress getAddress() {
    return address;
  }

  @JsonProperty("address")
  public void setAddress(@Nullable SellerUpdateInputAddress address) {
    this.address = address;
  }

  public SellerUpdateInput rating(@Nullable BigDecimal rating) {
    this.rating = rating;
    return this;
  }

  /**
   * Get rating
   * minimum: 0
   * maximum: 5
   * @return rating
   */
  @Valid @DecimalMin(value = "0") @DecimalMax(value = "5") 
  @Schema(name = "rating", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("rating")
  public @Nullable BigDecimal getRating() {
    return rating;
  }

  @JsonProperty("rating")
  public void setRating(@Nullable BigDecimal rating) {
    this.rating = rating;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SellerUpdateInput sellerUpdateInput = (SellerUpdateInput) o;
    return Objects.equals(this.storeName, sellerUpdateInput.storeName) &&
        Objects.equals(this.phone, sellerUpdateInput.phone) &&
        Objects.equals(this.address, sellerUpdateInput.address) &&
        Objects.equals(this.rating, sellerUpdateInput.rating);
  }

  @Override
  public int hashCode() {
    return Objects.hash(storeName, phone, address, rating);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SellerUpdateInput {\n");
    sb.append("    storeName: ").append(toIndentedString(storeName)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    rating: ").append(toIndentedString(rating)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

